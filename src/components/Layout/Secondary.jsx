const Secondary = () => {
  return (
    <div className="secondary">
      <p className="quote">
        {" "}
        "A Software Apprenticeship Program for developers, by developers. We
        provide junior software engineer candidates that are a cut above."{" "}
      </p>
      <div className="card student-card">
        <h2 className="card-title">Apprentices</h2>
        <img
          className="card-image"
          alt="image"
          src={
            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186002/samples/people/bicycle.jpg"
          }
        />
        <p className="card-text">
          Learn more about what it means to be an apprentice at Red Moon, how to
          get admitted into the program and what you'll be doing once you're in.
          Join and work with us to reach your goals in software!
        </p>
        <button className="card-link">Learn More</button>
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
          Our apprentices are working on projects in diverse tech stacks. Find
          out more about their favorite tech stacks, see their portfolios, and
          learn about their goals in tech. Recruiters, start here to find the
          next talent for your organization.
        </p>
        <button className="card-link">Find Talent</button>
      </div>
    </div>
  );
};

export default Secondary;
