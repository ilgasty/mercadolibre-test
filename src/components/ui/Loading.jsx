
export const Loading = () => {
  return (
    <>
      <div className="loading_overlay" />
      <div className="loading_backdrop" />

      <div className="loading_container">
        <div className="loading_spinner">
          <div className="spinner-circle">
            <p className="loading-text">Cargando...</p>
          </div>
          <div className="spinner-animate"></div>
        </div>
      </div>
    </>
  );
};
