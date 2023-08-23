import image1 from "../assets/images/projects/project1.jpg";

const Project = () => {
  const project = [
    {
      image: `${image1}`,
      title: "Ecommarce Application",
      technology: "Node Js, Express Js, MongoDB, React Js",
    },
    {
      image: `${image1}`,
      title: "Ecommarce Application",
      technology: "Node Js, Express Js, MongoDB, React Js",
    },
    {
      image: `${image1}`,
      title: "Ecommarce Application",
      technology: "Node Js, Express Js, MongoDB, React Js",
    },
    {
      image: `${image1}`,
      title: "Ecommarce Application",
      technology: "Node Js, Express Js, MongoDB, React Js",
    },
  ];
  return (
    <div>
      <section className="project" id="project">
        <div className="container">
          <h1 className="heading">Project</h1>
          <div className="row">
            {project.map((p, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="project__card">
                  <div className="project__card__images">
                    <img src={p.image} alt="project1" />
                  </div>
                  <div className="project__card__layer">
                    <div className="project__card__layer__contents">
                      <h3 className="project__card__layer__contents__title">
                        {p.title}
                      </h3>
                      <span className="project__card__layer__contents__tools">
                        {p.technology}
                      </span>
                    </div>
                    <div className="project__card__layer__link">
                      <a href="javascript:void(0)">
                        <i className="bi bi-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
