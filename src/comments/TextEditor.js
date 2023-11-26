import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {

    var modules = {
        toolbar: [

            ["bold", "italic", "underline", "strike", { list: "bullet" }, "link"],

        ]
    };

    var formats = [
        "bold", "italic",
        "underline", "strike",
        "bullet",
        "link",
    ];

    const handleProcedureContentChange = (content) => {
        console.log("content---->", content);
    };

    return (
        <div >
            <div className='box-cls'>
                <ReactQuill
                    theme="snow"
                    className='box-size'
                    modules={modules}
                    formats={formats}
                    placeholder="write your content ...."
                    onChange={handleProcedureContentChange}

                >
                </ReactQuill>
            </div>
            <button className='btn-cls' >
                Post Comment
            </button>
        </div>

    );

}
export default TextEditor;