const Secondary = () => {
  return (
    <div className="secondary">
      <p className="quote">
        {" "}
        "A Software Apprenticeship Program for developers, by developers. We
        provide junior software engineer candidates that are a cut above."{" "}
      </p>
      <div className="card student-card">
        <h2 className="card-title">Students</h2>
        <img
          className="card-image"
          alt="image"
          src={
            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186002/samples/people/bicycle.jpg"
          }
        />
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          labore, officia, unde illo vel odit veniam maxime aperiam enim
          laboriosam soluta quisquam? Assumenda odio animi aut impedit ea. Cum,
          fuga.
        </p>
        <button className="card-link">Link</button>
      </div>
      <div className="card employer-card">
        <h2 className="card-title">Employers</h2>
        <img
          className="card-image"
          alt="image"
          src={
            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186001/samples/animals/three-dogs.jpg"
          }
        />
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          labore, officia, unde illo vel odit veniam maxime aperiam enim
          laboriosam soluta quisquam? Assumenda odio animi aut impedit ea. Cum,
          fuga.
        </p>
        <button className="card-link">Link</button>
      </div>
    </div>
  );
};

export default Secondary;
