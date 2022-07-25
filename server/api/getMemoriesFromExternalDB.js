import {S3, ListObjectsCommand, GetObjectCommand} from '@aws-sdk/client-s3'
import useShuffle from '~/composables/useShuffle'

export default defineEventHandler(async (event) => {
    const endpoint = process.env.DO_SPACES_ENDPOINT
    const accessKeyId = process.env.DO_SPACES_KEY
    const secretAccessKey = process.env.DO_SPACES_SECRET
    const bucket = process.env.DO_SPACES_BUCKET_NAME
    const region = process.env.DO_SPACES_REGION
    const memoriesCollection = []

    const s3Client = new S3({
      endpoint,
      region, 
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    });

    const streamToString = (stream) => {
      const chunks = [];
      return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      });
    };

    const generateHashID = () => {
      return `${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`;
    }

    const generateMemoriesCollection = async (file) => {
      const response = await s3Client.send(new GetObjectCommand({Bucket: bucket, Key: file.Key}));
      const content = await streamToString(response.Body)
      const title = file.Key.split('.')[0]
      const id = generateHashID()
      const lastModified = file.LastModified
      const memory = {
        id,
        title,
        content,
        lastModified
      }
      memoriesCollection.push(memory)
    }
    
    const getMemories = async () => {
      try {
        const objectsInBucket = await s3Client.send(new ListObjectsCommand({Bucket: bucket}));
        const mdObjects = objectsInBucket.Contents.filter(object => object.Key.split('.')[1] == 'md')
        for (const file of mdObjects) {
          try {
            await generateMemoriesCollection(file)
          } catch (err) {
            console.log("Error", err);
          } 
        }
      } catch (err) {
        console.log("Error", err);
      }
    };

    await getMemories()

    return await useShuffle(memoriesCollection)
  })