import { Resource } from "../models/Resource"

export const resolvers = {
  Query: {
    resources: async () => {
      const resources = await Resource.find({}, (err, resources) => {
        console.log(resources)
        if (err) return console.log(err)
        return resources
      }).exec()
      return resources
    }
  }
}