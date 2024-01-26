import React from "react";

// function AlertButton({ message, children }) {
//   return (
//     <div>
//       <button onClick={() => alert(message)}>{children}</button>
//     </div>
//   );
// }

// export default function ToolBar() {
//   return <div>
//     <AlertButton message="Playing!">
//         Play Movie
//     </AlertButton>

//     <AlertButton message="Uploading!">
//         Upload Image
//     </AlertButton>
//   </div>;
// }


import Button from './Button.js';


export default function ToolBar({onPlayMovie,onUploadImage}) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  )
}
