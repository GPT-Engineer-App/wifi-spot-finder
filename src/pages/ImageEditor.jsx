import React from "react";
import { Box, Button, Input, Image, Select } from "@chakra-ui/react";

function ImageEditor() {
  const [image, setImage] = React.useState(null);

  const [bgColor, setBgColor] = React.useState("white");

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

  const handleRemoveBackground = () => {
    setBgColor("transparent");
  };

  const handleBgColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <Box p={4}>
      <Input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <Box position="relative">
          <Image src={image} alt="Uploaded" bg={bgColor} />
          <Button mt={4} onClick={handleRemoveBackground}>
            Remove Background
          </Button>
          <Select mt={4} onChange={handleBgColorChange} value={bgColor}>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Select>
        </Box>
      )}
      <Button mt={4} onClick={handleImageEdit}>
        Edit Image
      </Button>
    </Box>
  );
}

export default ImageEditor;
