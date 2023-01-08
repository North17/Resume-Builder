const WorkModule = ({ job, allJobs, setJobs, onDelete }) => {
  let post = job.post;
  let startDate = job.startDate;
  let endDate = job.endDate;
  let address = job.address;
  let points = job.points;

  function setPost(value) {
    let arr = [];
    for (let i = 0; i < allJobs.length; i++) {
      if (allJobs[i].id === job.id) {
        allJobs[i].post = value;
      }
      arr.push(allJobs[i]);
      setJobs(arr);
    }
  }

  function setStartDate(value) {
    let arr = [];
    for (let i = 0; i < allJobs.length; i++) {
      if (allJobs[i].id === job.id) {
        allJobs[i].startDate = value;
      }
      arr.push(allJobs[i]);
      setJobs(arr);
    }
  }

  function setEndDate(value) {
    let arr = [];
    for (let i = 0; i < allJobs.length; i++) {
      if (allJobs[i].id === job.id) {
        allJobs[i].endDate = value;
      }
      arr.push(allJobs[i]);
      setJobs(arr);
    }
  }

  function setAddress(value) {
    let arr = [];
    for (let i = 0; i < allJobs.length; i++) {
      if (allJobs[i].id === job.id) {
        allJobs[i].address = value;
      }
      arr.push(allJobs[i]);
      setJobs(arr);
    }
  }

  function setPoints(value) {
    let arr = [];
    for (let i = 0; i < allJobs.length; i++) {
      if (allJobs[i].id === job.id) {
        allJobs[i].points = value;
      }
      arr.push(allJobs[i]);
      setJobs(arr);
    }
  }

  return (
    <div className="work-module">
      <div className="job-button-aligner"><button onClick={() => onDelete(job.id)}>X</button></div>
      <div className="job-box">
        <div className="form-sub-group">
          <label>Post</label>
          <input
            type="text"
            placeholder="Post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></input>
        </div>

        <div className="form-sub-group">
          <label>Start Date</label>
          <input
            type="text"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
        </div>

        <div className="form-sub-group">
          <label>End Date</label>
          <input
            type="text"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </div>

        <div className="form-sub-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>

        <div className="form-sub-group">
          <label>Details</label>
          <textarea
            type="text"
            placeholder="Details"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          ></textarea>
      </div>


      </div>
      
    </div>
  );
};

export default WorkModule;
