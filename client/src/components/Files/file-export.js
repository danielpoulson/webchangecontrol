//SYNC 11/03/2017 DP
import React from 'react';
import FileList from '../../containers/Files/file-list';

const FileExport = () => (
  <div>
    <div className="section-header">
      <div className="col-sm-6 pull-left">
        <p className="section-header-text-main">File Export Page</p>
      </div>
    </div>
    <FileList
      exportFiles="hidden" />
  </div>
);

export default FileExport;
