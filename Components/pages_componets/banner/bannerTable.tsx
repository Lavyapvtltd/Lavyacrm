import React, { useEffect, useState } from "react";
import { Col, Table } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import {
  GET_ALL_BANNERS,
  baseURL,
  imagebaseURL,
  DELETE_BANNER
} from "../../../Components/helpers/url_helper";
const bannerTable = () => {
  const router = useRouter();
  const [banners,setBanners] = useState([]);
  console.log(banners);

  const DeleteBanner = async(id:any)=>{
    try{
      const data:any = await axios(`${baseURL}${DELETE_BANNER}${id}`);
      const {baseResponse,response}:any = data;
      if (baseResponse.status === 1) {
        Swal.fire({
          title: "Success",
          text: baseResponse.message,
          icon: "success",
        });
        getAllBanners();
      }else if (baseResponse.status === 0) {
        Swal.fire({
          title: "error",
          text: baseResponse.message,
          icon: "error",
        });
      }
    }catch(error:any){
      Swal.fire({
        title: error,
        text: error,
        icon: "error",
      });
    }
  }

  const getAllBanners =async ()=>{
    try{
      const data:any = await axios(`${baseURL}${GET_ALL_BANNERS}`);
      const {baseResponse,response}:any = data;
      setBanners(response);
    }catch(error){
      console.log("Something went wrong");
    }
  }
  useEffect(()=>{
    getAllBanners();
  },[])
  
  return (
    <div>
      <Col xl={12}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Actions</th>
              <th>SR NO</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
              {
                banners?.map((item:any,index:any)=>{
                  return(
                    <tr key={item._id}>
                      <td>
                      <>
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <span
                              className="cursor-pointer"
                              onClick={() => DeleteBanner(item._id)}
                            >
                              <i className="bi bi-trash" />
                            </span>
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                router.push(`/banner/edit-banner/${item._id}`);
                              }}
                            >
                              <i className="bi bi-pencil" />
                            </span>
                          </div>
                        </div>
                      </>
                      </td>
                      <td>{++index}</td>
                      <td></td>
                      <div className="flex-shrink-0 me-2">
                        {
                          item.images.map((image:any,index:any)=>{
                            return  <img
                            src={`${imagebaseURL}${image.filename}`}
                            width="32"
                            height={32}
                            alt=""
                            className="avatar-xs rounded-circle"
                          />
                          })
                        }
                      </div>
                    </tr>
                  )
                })
              }
              
          </tbody>
        </Table>
      </Col>
    </div>
  );
};

export default bannerTable;
