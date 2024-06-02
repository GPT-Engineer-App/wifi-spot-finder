import React from "react";
import { Box, Button, Input, Image } from "@chakra-ui/react";

function ImageEditor() {
  const [image, setImage] = React.useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageEdit = () => {
    alert("Image editing functionality will be implemented here.");
  };

  return (
    <Box p={4}>
      <Input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <Image src={image} alt="Uploaded" />}
      <Button mt={4} onClick={handleImageEdit}>
        Edit Image
      </Button>
    </Box>
  );
}

export default ImageEditor;
