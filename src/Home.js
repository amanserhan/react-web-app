
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { Carousel } from 'react-responsive-carousel';
        import 'react-responsive-carousel/lib/styles/carousel.min.css';
        
        function Home() {
          return (
            <div>
              <div
                style={{
                  backgroundColor: 'black',
                  height: '100vh',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="top-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginLeft: '150px',
                    marginTop: '50px',
                    marginRight: '400px',
                    padding: '10px',
                    position: 'relative',
                  }}
                >
                  <button>Home</button>
                  <button>Recent</button>
                  <button>Watched</button>
                </div>
        
                <img
                  src="https://eonmedia.ai/wp-content/uploads/2021/12/logo-2.svg"
                  alt="Eon Media"
                  style={{
                    width: '100px',
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                  }}
                />
              </div>
        
              <h1>Home Page</h1>
              <Carousel>
                <div>
                  <img src="./images/bestcourses.png" alt="Image 1" />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src="./images/geeks.jpeg" alt="Image 2" />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src="./images/logoreact.jpeg" alt="Image 3" />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
              <Link to="/PlayerPage.js">Go to Player Page</Link>
            </div>
          );
        }
        
        export default Home;
        