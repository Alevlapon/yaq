// Require the cloudinary library
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dbdvlnqk3",
  api_key: "935872477926913",
  api_secret: "R5tCMlgCGy_4Au9Pfv4eHYiayoI",
  secure: true,
});

// Log the configuration
class Photo {
  save(img) {
    cloudinary.uploader.upload(img).then((result) => console.log(result));
    return result;
  }
}

export default new Photo();
