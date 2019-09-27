import { DropZone, Banner, Stack, List, Thumbnail, Caption } from '@shopify/polaris';

class ImageDropZone extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      files: [],
      rejectedFiles: [],
      hasError: false,
    }
  }

  render(){
    const {files, hasError, rejectedFiles} = this.state;

    const fileUpload = !files.length && <DropZone.FileUpload />;
    const uploadedFiles = files.length > 0 && (
      <Stack vertical>
        {files.map((file, index) => (
          <Stack alignment="center" key={index}>
            <Thumbnail
              size="small"
              alt={file.name}
              source={window.URL.createObjectURL(file)}
            />
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    );

    const errorMessage = hasError && (
      <Banner
        title="The following images couldn’t be uploaded:"
        status="critical"
      >
        <List type="bullet">
          {rejectedFiles.map((file, index) => (
            <List.Item key={index}>
              {`"${file.name}" is not supported. File type must be .gif, .jpg, .png or .svg.`}
            </List.Item>
          ))}
        </List>
      </Banner>
    );

    return (
      <Stack vertical>
        {errorMessage}
        <DropZone
          accept="image/*"
          type="image"
          onDrop={(files, acceptedFiles, rejectedFiles) => {
            this.setState({
              files: [...this.state.files, ...acceptedFiles],
              rejectedFiles: rejectedFiles,
              hasError: rejectedFiles.length > 0,
            });
          }}
          label="Click the drop zone to continue uploading more images: "
        >
          {uploadedFiles}
          {fileUpload}
        </DropZone>
      </Stack>
    );
  }
}

export default ImageDropZone;