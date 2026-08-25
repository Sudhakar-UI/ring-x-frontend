"use client"
import React from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Form, Table } from 'react-bootstrap'
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const page = () => 
	{
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader /> 
			<Leftsidemenu />     
			<div className="innerpagecontent">
				<Container className="sitecontainer">
						<h2 className="h2">KYC Verification</h2>						
                </Container>
			</div>       
            <article className="gridparentbox">               
                <Container className="sitecontainer kycviewpage">   					
                    <div className="panelcontentbox">    
						<Form className="siteformbg">
							<SimpleBar className="table-responsive">
								<Table className="sitetable" id="table1">
									<tbody>
										<tr>
											<td><span className="t-gray">First Name</span><br/>Johnuser</td>
											<td><span className="t-gray">Last Name</span><br/>Johnuser</td>
											<td><span className="t-gray">Date of Birth</span><br/>01/12/2024</td>
											<td><span className="t-gray">Street Address</span><br/>test, India</td>
											<td><span className="t-gray">Street Address 2</span><br/>test, India</td>													
										</tr>
										<tr>
											<td><span className="t-gray">City</span><br/>xxx</td>
											<td><span className="t-gray">State</span><br/>xxx</td>
											<td><span className="t-gray">Zipcode</span><br/>642642</td>
											<td><span className="t-gray">Select Country</span><br/>India</td>
											<td><span className="t-gray">ID document type</span><br/>Passport</td>
										</tr>
										<tr>
											<td><span className="t-gray">ID document number</span><br/>4626426</td>
											<td><span className="t-gray">Proof of address</span><br/>xxx</td>
											<td colSpan={2}><span className="t-gray">Expiry Date</span><br/>01/12/2024</td>										
										</tr>
										<tr>
											<td><span className="t-gray">ID Front Document</span><br/><Image src="assets/images/front.svg" width={50} height={50} alt="icon" /></td>
											<td colSpan={3}><span className="t-gray">ID Back Document</span><br/><Image src="assets/images/back.svg" width={50} height={50} alt="icon" /></td>											
										</tr>
									</tbody>	
								</Table>	
							</SimpleBar>				
						</Form>
					</div> 
                </Container>
            </article>
            <Userfooter />   
        </div>
    )
}

export default page