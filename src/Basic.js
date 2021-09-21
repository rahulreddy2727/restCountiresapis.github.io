import React from 'react';
 import { Formik } from 'formik';
 import './App.css'
 
 const Basic = (props) => (
     <div>
     <Formik
       initialValues={{ demonym: props.data.demonym, callingCode: props.data && props.data.callingCodes && props.data.callingCodes[0], currency: `${props.data && props.data.currencies && props.data.currencies[0].symbol} ${props.data &&props.data.currencies && props.data.currencies[0].name}`, population: props.data &&props.data.population }}
       enableReinitialize
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur
         /* and other goodies */
       }) => (
         <form className="alignInputTags">
             <span className="titleTag">Demonym</span>
           <input
             type="text"
             name="demonym"
             placeholder="Demonym"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.demonym}
             className="inputTag"
           />
           {errors.demonym && touched.demonym && errors.demonym}
             <span className="titleTag">Calling Code</span>
           <input
             type="text"
             name="callingCode"
             placeholder="Calling Code"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.callingCode}
             className="inputTag"
           />
           {errors.callingCode && touched.callingCode && errors.callingCode}
             <span className="titleTag">Currency</span>
           <input
             type="text"
             name="currency"
             placeholder="Currency"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.currency}
             className="inputTag"
           />
           {errors.currency && touched.currency && errors.currency}
             <span className="titleTag">Population</span>
           <input
             type="text"
             name="population"
             placeholder="Population"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.population}
             className="inputTag"
           />
           {errors.population && touched.population && errors.population}
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;