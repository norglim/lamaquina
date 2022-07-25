import {S3, ListObjectsCommand} from '@aws-sdk/client-s3'

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

    const generateMemoriesDatesCollection = async (file) => {
      const lastModified = file.LastModified
      const memory = {
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
            await generateMemoriesDatesCollection(file)
          } catch (err) {
            console.log("Error", err);
          } 
        }
      } catch (err) {
        console.log("Error", err);
      }
    };

    await getMemories()

    return memoriesCollection
  })