import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import NonAuthLayout from "@common/Layout/NonAuthLayout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import Link from "next/link";

const SingupBasic2 = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign Up | Lavya -Admin </title>
      </Head>
      <section className="auth-page-wrapper-2 py-4 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <Container>
          <Row className="g-0">
            <Col lg={5}>
              <div className="auth-card card bg-primary h-100 rounded-0 rounded-start border-0 d-flex align-items-center justify-content-center overflow-hidden p-4">
                <div className="auth-image">
                  <Image src={logoLightFull} alt="" height="42" />
                  <Image src={authEffect2} alt="" className="auth-effect-2" />
                  <Image src={authEffect} alt="" className="auth-effect" />
                  <Image src={authEffect} alt="" className="auth-effect-3" />
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Card className="mb-0 rounded-0 rounded-end border-0">
                <Card.Body className="p-4 p-sm-5 m-lg-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary fs-20">Create New Account</h5>
                    <p className="text-muted">
                      Get your free Lavya account now
                    </p>
                  </div>
                  <div className="p-2 mt-5">
                    <form className="needs-validation" noValidate action="#">
                      <div className="mb-3">
                        <label htmlFor="useremail" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span
                            className="input-group-text bg-card-custom"
                            id="basic-addon1"
                          >
                            <i className="ri-mail-line"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            id="useremail"
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">
                          Please enter email
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span
                            className="input-group-text bg-card-custom"
                            id="basic-addon1"
                          >
                            <i className="ri-user-3-line"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">
                          Please enter username
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="password-input">
                          Password
                        </label>
                        <div className="position-relative auth-pass-inputgroup overflow-hidden">
                          <div className="input-group">
                            <span
                              className="input-group-text bg-card-custom"
                              id="basic-addon1"
                            >
                              <i className="ri-lock-2-line"></i>
                            </span>
                            <input
                              type="password"
                              className="form-control pe-5 password-input"
                              placeholder="Enter password"
                              id="password-input"
                              aria-describedby="passwordInput"
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              required
                            />
                          </div>
                          <Button
                            variant="link"
                            className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                            type="button"
                            id="password-addon"
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </Button>
                        </div>
                        <div className="invalid-feedback">
                          Please enter password
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="mb-0 fs-12 text-muted fst-italic">
                          By registering you agree to the Lavya{" "}
                          <Link
                            href="#"
                            className="text-primary text-decoration-underline fst-normal fw-medium"
                          >
                            Terms of Use
                          </Link>
                        </p>
                      </div>

                      <div
                        id="password-contain"
                        className="p-3 bg-light mb-2 rounded"
                      >
                        <h5 className="fs-13">Password must contain:</h5>
                        <p id="pass-length" className="invalid fs-12 mb-2">
                          Minimum <b>8 characters</b>
                        </p>
                        <p id="pass-lower" className="invalid fs-12 mb-2">
                          At <b>lowercase</b> letter (a-z)
                        </p>
                        <p id="pass-upper" className="invalid fs-12 mb-2">
                          At least <b>uppercase</b> letter (A-Z)
                        </p>
                        <p id="pass-number" className="invalid fs-12 mb-0">
                          A least <b>number</b> (0-9)
                        </p>
                      </div>

                      <div className="mt-4">
                        <Button
                          variant="primary"
                          className="w-100"
                          type="submit"
                        >
                          Sign Up
                        </Button>
                      </div>

                      <div className="mt-4 text-center">
                        <div className="signin-other-title">
                          <h5 className="fs-13 mb-4 title text-muted">
                            Create account with
                          </h5>
                        </div>

                        <div>
                          <Button
                            variant="soft-primary"
                            type="button"
                            className="btn-icon "
                          >
                            <i className="ri-facebook-fill fs-16"></i>
                          </Button>
                          <Button
                            variant="soft-danger"
                            type="button"
                            className="btn-icon "
                          >
                            <i className="ri-google-fill fs-16"></i>
                          </Button>
                          <Button
                            variant="soft-dark"
                            type="button"
                            className="btn-icon "
                          >
                            <i className="ri-github-fill fs-16"></i>
                          </Button>
                          <Button
                            variant="soft-info"
                            type="button"
                            className="btn-icon "
                          >
                            <i className="ri-twitter-fill fs-16"></i>
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="mb-0">
                      Already have an account ?{" "}
                      <Link
                        href="/auth-pages/login/signin-basic-2"
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
        </Container>
      </section>
    </React.Fragment>
  );
};

SingupBasic2.getLayout = function getLayout(page: any) {
  return <NonAuthLayout>{page}</NonAuthLayout>;
};
export default SingupBasic2;
