import React, { useRef, useState } from 'react';
import TermsAndConditions from './T&C';
import {ReactComponent as FileIcon} from "../icons/File_Icon.svg"

const File = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);
        setSelectedFile(selectedFile);
        setIsFileUploaded(false);
    };

    const handleUpload = () => {
        // Perform file upload logic here (e.g., send file to server).
        // After successful upload, update state to indicate that the file is uploaded.
        setIsFileUploaded(true);
    };

    const handleCancelUpload = () => {
        // Reset file-related state to cancel the upload.
        setSelectedFile(null);
        setIsFileUploaded(false);
    };

    return (
        <div className="vstack gap-4 align-items-center">
            <FileIcon />
            <form className="vstack gap-4 align-items-center">
                <input
                    type="file"
                    hidden
                    id="fileSelector"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
                {selectedFile && (
                    <div className='file-confirmation'>
                        <div className="file-details">
                            <span className='selected-file'>
                                {selectedFile.name}
                            </span>
                            <span
                                role="button"
                                className="close-icon"
                                onClick={handleCancelUpload}>
                                &#10006;
                            </span>
                        </div>
                        {!isFileUploaded && (
                            <div>
                                <button type="button" className="btn" onClick={handleUpload}>
                                    Confirm Upload
                                </button>
                            </div>
                        )}
                    </div>
                )}
                {!selectedFile && (
                    <button
                        id="infoIcon"
                        type="button"
                        className="btn"
                        onClick={handleChooseFile}
                    >
                        Choose File
                    </button>
                )}
            </form>
            <TermsAndConditions />
        </div>
    );
}

export default File;
