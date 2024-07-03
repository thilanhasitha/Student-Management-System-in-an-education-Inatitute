//  import axios from 'axios'
//  import React, { useEffect, useState } from 'react'
//  import Header from './Header'
//  import Footer from './Footer'
//  import jsPDF from 'jspdf' 

//  function Viewsubjects ()  {
//      const[loader,setLoader] = useState(false);
    
//      useEffect(()=>{
//          axios.get('http://localhost:3001/viewsubjects')
//          .then(result=>setViewsubjects(result.data))
//          .catch(err=>console.log(err))

//      },[])
//      const generatePDF = () => {
//         const doc = new jsPDF();
//         doc.text('Subjects', 10, 10);
//         let yPos = 20;
//         Viewsubjects.forEach(viewsubject => {
//           doc.text(`Subject: ${viewsubject.subject}`, 10, yPos += 10);
//           doc.text(`EnrollmentKey: ${viewsubject.enrollmentkey}`, 10, yPos += 10);
//           doc.text(`Grade: ${viewsubject.grade}`, 10, yPos += 10);
//           doc.text(`Teacher: ${viewsubject.teacher}`, 10, yPos += 10);
//           doc.text(`Year: ${viewsubject.year}`, 10, yPos += 10);
//           yPos += 10; // Add some space between entries
//         });
//         doc.save('viewsubjects.pdf');
//       };
//    return (
//      <div className='subjects'>
//           <Header/> 
//           <button onClick={generatePDF}>Generate PDF</button>
//          <table className='table'>
//              <thead>
//                  <tr>
//                      <th>Subject</th>
//                      <th>EnrollmentKey</th>
//                      <th>Grade</th>
//                      <th>Teacher</th>
//                      <th>Year</th>
//                  </tr>
//              </thead>
//              <tbody>
//                  {
//                      Viewsubjects.map((viewsubject)=>{
//                          return<tr>
//                              <td>{viewsubject.subject}</td>
//                              <td>{viewsubject.enrollmentkey}</td>
//                              <td>{viewsubject.grade}</td>
//                              <td>{viewsubject.teacher}</td>
//                              <td>{viewsubject.year}</td>
                            

//                          </tr>
//                      })
                    
//                  }
//              </tbody>

//          </table>
     
//        {/* <Footer/> */}
//      </div>
//    )
//  }

//  export default Viewsubjects;


import axios from 'axios'
import React, { useEffect, useState,useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import jsPDF from 'jspdf' 
import Html2Pdf from 'html2pdf.js'

function Viewsubjects ()  {
    const[loader,setLoader] = useState(false);
    const[error,setError] = useState('');
    const[viewsubjects,setViewsubjects] = useState([

    
    ])

    const componenetRef = useRef();
   
    const downloadPDF=()=>{
        setLoader(true);
        setError('');
        
        const token = localStorage.getItem('token');
        
        if(token){
            
            const axiosConfig={
                responseType:'arraybuffer',
                headers:{
                    Accept:'application/json',
                        Authorization:`Bearer ${token}`
                }
            }
            
            axios.get('http://localhost:5173/viewsubjects',axiosConfig)
            
            .then((response)=>{
                
                setLoader(false);
                
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download','receipt.pdf');
                document.body.appendChild(link);
                link.click();
            }) 
            
            .catch((error)=>{
                setLoader(false);
                setError(error.message);
                
            })
        }
    }
    useEffect(()=>{
        axios.get('http://localhost:3001/viewsubjects')
        .then(result=>setViewsubjects(result.data))
        .catch(err=>console.log(err))

    },[])

    const generatePDF = ()=>{
        const element = componenetRef.current
        Html2Pdf(element,{
            margin:0.5,
            filename:`classes.pdf`,
            html2canvas:{scale:2},
            jsPDF:{unit:'in',format:'A4',orientation:'portrait'}
        })
    }
  return (
    <div className='subjects'>
         <Header/> 
        <table className='table' ref={componenetRef}>
            {/* <div ref={componenetRef}> */}
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>EnrollmentKey</th>
                    <th>Grade</th>
                    <th>Teacher</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {
                    viewsubjects.map((viewsubject)=>{
                        return<tr>
                            <td>{viewsubject.subject}</td>
                            <td>{viewsubject.enrollmentkey}</td>
                            <td>{viewsubject.grade}</td>
                            <td>{viewsubject.teacher}</td>
                            <td>{viewsubject.year}</td>
                            

                        </tr>
                    })
                    
                }
            </tbody>
            {/* </div> */}

        </table>
        <div>
             {/* <button className='download' onClick={downloadPDF}>
                {loader?(
                    <>Downloading</>
                ):(
                <>Download</>
               )}
                </button> 

                {error!==''&&(
                    <div className='error-msg'>{error}</div>
                )} */}

                <button onClick={generatePDF}>Download PDF </button>
        </div>
       <Footer/> 
    </div>
  )
}

export default Viewsubjects;
