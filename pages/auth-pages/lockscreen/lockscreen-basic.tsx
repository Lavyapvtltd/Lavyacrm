import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import NonAuthLayout from "@common/Layout/NonAuthLayout";

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import avatar1 from "@assets/images/users/avatar-1.jpg";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const LockScreenBasic = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Lock Screen | Lavya -Admin </title>
      </Head>
      <section className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Row className="g-0">
                    <Col lg={5}>
                      <Card className="auth-card bg-primary h-100 border-0 shadow-none p-sm-3 overflow-hidden">
                        <Card.Body className="p-4 d-flex justify-content-between flex-column">
                          <div className="auth-image">
                            <Image src={logoLightFull} alt="" height="26" />
                            <Image
                              src={authEffect2}
                              alt=""
                              className="auth-effect-2"
                            />
                            <Image
                              src={authEffect}
                              alt=""
                              className="auth-effect"
                            />
                            <Image
                              src={authEffect}
                              alt=""
                              className="auth-effect-3"
                            />
                          </div>

                          <div>
                            <h3 className="text-white">
                              Start your journey with us.
                            </h3>
                            <p className="text-white-75 fs-15">
                              It brings together your tasks, projects,
                              timelines, files and more
                            </p>
                          </div>
                          <div className="text-center text-white-75">
                            <p className="mb-0">
                              © {new Date().getFullYear()} Lavya. Crafted with{" "}
                              <i className="mdi mdi-heart text-danger"></i> by
                              Themesbrand
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={7}>
                      <Card className="mb-0 border-0 shadow-none">
                        <Card.Body className="px-0 p-sm-5 m-lg-4">
                          <div className="text-center">
                            <h5 className="text-primary fs-20">Lock Screen</h5>
                            <p className="text-muted mb-4">
                              Enter your password to unlock the screen!
                            </p>
                          </div>
                          <div className="user-thumb text-center">
                            <Image
                              src={avatar1}
                              className="rounded-circle img-thumbnail avatar-lg"
                              alt="thumbnail"
                            />
                            <h5 className="font-size-15 mt-3">
                              Hi ! Edward Diana
                            </h5>
                          </div>
                          <div className="p-2 mt-4">
                            <form>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="userpassword"
                                >
                                  Password or Pin
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="userpassword"
                                  placeholder="Enter password or pin"
                                  required
                                />
                              </div>
                              <div className="mb-2 mt-4">
                                <Button
                                  variant="primary"
                                  className="w-100"
                                  type="submit"
                                >
                                  Unlock
                                </Button>
                              </div>
                            </form>
                          </div>
                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              Not you ? return{" "}
                              <Link
                                href="/auth-pages/login/signin-basic"
                                className="fw-semibold text-primary text-decoration-underline"
                              >
                                {" "}
                                Signin{" "}
                              </Link>{" "}
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

LockScreenBasic.getLayout = function getLayout(page: any) {
  return <NonAuthLayout>{page}</NonAuthLayout>;
};
export default LockScreenBasic;
