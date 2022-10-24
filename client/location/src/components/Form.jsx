import bgImg from "../image/zac-gudakov-faBWQt9i7dg-unsplash.jpg";
const Form = () => {
  return (
    <section>
      <div className="inputForm">
        <div className="col-1">
          <h2>Find A Home</h2>
          <span>HAve Fun!</span>
          <form id="form" className="flex flex-col">
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="confirm email" />
            <input type="text" placeholder="number" />
            <div className="options">
              <button type="button">running</button>
              <button type="button">cross-fit</button>
              <button type="button">soccer</button>
              <button type="button">music</button>
            </div>
            <button className="registerBtn" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="col-2">
          <img src={bgImg} alt="neighborhood" />
        </div>
      </div>
    </section>
  );
};

export default Form;
