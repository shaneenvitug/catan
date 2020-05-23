import mongoose from "mongoose"

export const Resource = mongoose.models.Resource || mongoose.model("Resource", { name: String })