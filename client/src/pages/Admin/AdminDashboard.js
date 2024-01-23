import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const { email, name, phone } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    //eslint-disable-next-line
  }, [auth?.user]);

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 d-flex justify-content-center">
            <div className="card w-75">
              <div style={{ marginTop: "0px" }} className="form-container">
                <div style={{ paddingTop: "20px" }} className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Admin Email:
                  </label>
                  <input
                    type="text"
                    value={email}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Registered Email"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Admin Name:
                  </label>
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Full Name"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Admin Contact:
                  </label>
                  <input
                    type="text"
                    value={phone}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
