// import React, { useState } from 'react';
// import { Box } from '@mui/material';
// import { Form, Formik } from 'formik';
// import * as Yup from 'yup';
// import styles from './AddRecipeForm.module.scss';
// import Button from './AddRecipeButton';
// import categories from './data/categories.json';
// import cookingTime from './data/cookingTime.json';
// import { RecipeDescriptionFields } from './RecipeDescriptionFields';
// import { RecipeIngredientsFields } from './RecipeIngredientsFields';
// import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

// const MAX_FILE_SIZE = 700 * 1024;

// const initialValues = {
//   title: '',
//   about: '',
//   category: 'breakfast',
//   cookingTime: '40 min',
//   recipe: '',
//   file: '',
//   ingredients: [{ name: '', dose: '' }],
//   preparation: '',
// };

// const validFileExtensions = {
//   image: ['jpg', 'png', 'jpeg', 'webp'],
// };

// function isValidFileType(fileName, fileType) {
//   return (
//     fileName &&
//     validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
//   );
// }

// const FORM_VALIDATION = Yup.object().shape({
//   title: Yup.string().required('Title is required'),
//   about: Yup.string().required('About is required'),
//   category: Yup.string().required('Category is required'),
//   cookingTime: Yup.string().required('Cooking time is required'),
// file: Yup.mixed()
//   .test('is-valid-file', 'Invalid file format', function (value) {
//     if (!value) {
//       return true;
//     }
//     return isValidFileType(value && value.name.toLowerCase(), 'image');
//   })
//   .test(
//     'is-valid-size',
//     'File size exceeds the maximum limit',
//     function (value) {
//       if (!value) {
//         return true;
//       }
//       return value.size <= MAX_FILE_SIZE;
//     }
//   )
//   .required('Image is required'),
// ingredients: Yup.array()
//   .of(
//     Yup.object().shape({
//       name: Yup.string().required('Ingredient is required'),
//       dose: Yup.string().required('Dose is required'),
//     })
//   )
//   .required('Ingredients are required'),
//   preparation: Yup.string(),
// });

// export const AddRecipeForm = () => {
//   const [isFormSubmitted, setFormSubmitted] = useState(false);
//   const [counter, setCounter] = useState(1);

// const handleSubmit = (values, { resetForm }) => {
//   const file = values.file;
//   const errorMessage = validateFile(file);
//   if (!errorMessage) {
//     console.log(values);
//     setFormSubmitted(true);
//     setCounter(1);
//     resetForm();
//   }
// };

// const handleIncrement = () => {
//   setCounter(prevCounter => prevCounter + 1);
// };

// const handleDecrement = () => {
//   if (counter > 1) {
//     setCounter(prevCounter => prevCounter - 1);
//   }
// };

//   const validateFile = file => {
//     if (!file) {
//       return 'Please select a file';
//     }

//     if (file.size > MAX_FILE_SIZE) {
//       return 'File size exceeds the maximum limit';
//     }

//     if (!isValidFileType(file.name.toLowerCase(), 'image')) {
//       return 'Invalid file format';
//     }

//     return undefined;
//   };

//   return (
// <div className={styles.addRecipeForm}>
//   <Formik
//     initialValues={initialValues}
//     validationSchema={FORM_VALIDATION}
//     onSubmit={handleSubmit}
//   >
//     {({ values, errors }) => (
//       <Form>
//         <div className={styles.addRecipeForm}>
//           <RecipeDescriptionFields
//             isFormSubmitted={isFormSubmitted}
//             categories={categories}
//             cookingTime={cookingTime}
//           />
//           <RecipeIngredientsFields
//             counter={counter}
//             handleIncrement={handleIncrement}
//             handleDecrement={handleDecrement}
//           />
//           <RecipePreparationFields />
// <Box marginTop="18px" width="100%">
//   <Button type="submit">Submit</Button>
// </Box>
//         </div>
//         {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
//         <pre>{JSON.stringify(values, null, 4)}</pre> */}
//       </Form>
//     )}
//   </Formik>
// </div>
//   );
// };

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { Box } from '@mui/material';
import * as Yup from 'yup';
import ReactSelect from 'react-select';
import styles from './AddRecipeForm.module.scss';
import Button from './AddRecipeButton';
import { FileInputField } from './FileInputField';
import { ReactComponent as DeleteIcon } from '../AddRecipeForm/images/ingredientsDeleteIcon.svg';
import { ReactComponent as IncrementIcon } from './images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from './images/ingredientsDecrement.svg';
import categories from './data/categories.json';
import cookingTime from './data/cookingTime.json';
import ingredients from './data/ingredients.json';

const MAX_FILE_SIZE = 700 * 1024;

const validFileExtensions = {
  image: ['jpg', 'png', 'jpeg', 'webp'],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

const initialValues = {
  file: '',
  title: '',
  about: '',
  category: '',
  cookingTime: '',
  ingredients: [{ name: '', dose: '' }],
  preparation: '',
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  about: Yup.string().required('About is required'),
  category: Yup.string().required('Category is required'),
  cookingTime: Yup.string().required('Cooking time is required'),
  preparation: Yup.string().required('Recipe preparation is required'),
  ingredients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Select ingredient'),
      dose: Yup.string().required('Type dose'),
    })
  ),
  file: Yup.mixed()
    .test('is-valid-file', 'Invalid file format', function (value) {
      if (!value) {
        return true;
      }
      return isValidFileType(value && value.name.toLowerCase(), 'image');
    })
    .test(
      'is-valid-size',
      'File size exceeds the maximum limit',
      function (value) {
        if (!value) {
          return true;
        }
        return value.size <= MAX_FILE_SIZE;
      }
    )
    .required('Image is required'),
});

const customStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px',
    border: state.isFocused ? 'none' : 'none',
    outline: state.isFocused ? 'none' : 'none',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#8baa36',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    maxHeight: '170px', // Specify the desired height
    overflowY: 'auto',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: 34,
    width: '150px',
    border: 'none',
    outline: 'none',
    textAlign: 'end',
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
};

const customInredientStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px',
    border: state.isFocused ? 'none' : 'none',
    outline: state.isFocused ? 'none' : 'none',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#8baa36',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    maxHeight: '170px', // Specify the desired height
    overflowY: 'auto',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: '53px',
    width: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f5f5f5',
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
};

export const AddRecipeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleSubmit = (values, { resetForm }) => {
    const preparationArray = values.preparation
      .split('\n')
      .filter(line => line.trim() !== '');
    const updatedValues = {
      ...values,
      preparation: preparationArray,
    };
    console.log(updatedValues);
    setIsSubmitted(true);
    setCounter(1);
    resetForm();
  };

  // ingredients logic:

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  return (
    <div className={styles.addRecipeFormWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className={styles.addRecipeForm}>
            <div className={styles.descriptionWrapper}>
              <div className={styles.inputWrapperFile}>
                <FileInputField name="file" reset={isSubmitted} />
                <ErrorMessage
                  className={styles.errorMessageFile}
                  name="file"
                  component="div"
                />
              </div>
              <div className={styles.minWidthTabletContainer}>
                <div className={styles.inputWrapper}>
                  <Field
                    className={`${styles.recipeDescriptionInput} ${
                      errors.title && touched.title ? styles.error : ''
                    }`}
                    type="text"
                    name="title"
                    placeholder="Enter item title"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="title"
                    component="div"
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <Field
                    className={`${styles.recipeDescriptionInput} ${
                      errors.about && touched.about ? styles.error : ''
                    }`}
                    type="text"
                    name="about"
                    placeholder="Enter about recipe"
                  />
                  <ErrorMessage
                    name="about"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div
                  className={`${styles.inputWrapperCategory} ${
                    errors.category && touched.category ? styles.error : ''
                  }`}
                >
                  <label className={styles.categoryLabel} htmlFor="category">
                    Category
                  </label>

                  <ReactSelect
                    name="category"
                    options={categories}
                    styles={customStyles}
                    isSearchable={false}
                    className={styles.ingredientCategoryInput}
                    // onChange={value => setFieldValue('category', value.value)}
                    value={
                      isSubmitted
                        ? ''
                        : categories.find(
                            option => option.value === values.category
                          )
                    }
                    onChange={value => setFieldValue('category', value.value)}
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div
                  className={`${styles.inputWrapperCategory} ${
                    errors.cookingTime && touched.cookingTime
                      ? styles.error
                      : ''
                  }`}
                >
                  <label className={styles.categoryLabel} htmlFor="cookingTime">
                    Cooking time
                  </label>

                  <ReactSelect
                    name="cookingTime"
                    options={cookingTime}
                    styles={customStyles}
                    isSearchable={false}
                    value={
                      isSubmitted
                        ? ''
                        : cookingTime.find(
                            option => option.value === values.cookingTime
                          )
                    }
                    onChange={value =>
                      setFieldValue('cookingTime', value.value)
                    }
                  />
                  <ErrorMessage
                    name="cookingTime"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
              </div>
            </div>
            <div className={styles.ingredientsWrapper}>
              <div className={styles.ingredientsHeaderWrapper}>
                <p className={styles.ingredientsTitle}>Ingredients</p>
              </div>
              <div className={styles.ingredientsInputWrapper}>
                <FieldArray name="ingredients">
                  {({ push, remove, form }) => {
                    // console.log(form.values.ingredients);
                    return (
                      <div>
                        {form.values.ingredients.map((ingredient, index) => {
                          return (
                            <div
                              key={index}
                              className={styles.ingredientItemWrapper}
                            >
                              <div className={styles.ingredientInputWtapper}>
                                <ReactSelect
                                  name={`ingredients[${index}].name`}
                                  options={ingredients}
                                  isSearchable={true}
                                  styles={customInredientStyles}
                                  placeholder="Select ingredient"
                                  value={ingredients.find(
                                    option =>
                                      option.value ===
                                      values.ingredients[index].name
                                  )}
                                  onChange={selectedOption =>
                                    setFieldValue(
                                      `ingredients[${index}].name`,
                                      selectedOption.value
                                    )
                                  }
                                />
                              </div>
                              <ErrorMessage
                                name={`ingredients[${index}].name`}
                                className={styles.errorMessage}
                                component="div"
                              />
                              <Field
                                name={`ingredients[${index}].dose`}
                                placeholder="Dose"
                                className={styles.ingredientDose}
                              />
                              <ErrorMessage
                                name={`ingredients[${index}].dose`}
                                className={styles.doseErrorMessage}
                                component="div"
                              />

                              {values.ingredients.length > 1 && (
                                <DeleteIcon
                                  className={styles.deleteIcon}
                                  onClick={() => {
                                    console.log('This is delete button');
                                    remove(index);
                                    handleDecrement();
                                  }}
                                />
                              )}
                            </div>
                          );
                        })}
                        <Box className={styles.addRemoveCounter}>
                          {counter > 1 && (
                            <DecrementIcon
                              onClick={() => {
                                remove(counter - 1);
                                handleDecrement();
                              }}
                              className={styles.counterIcon}
                            />
                          )}
                          <span>{counter}</span>
                          <IncrementIcon
                            onClick={() => {
                              push({
                                name: '',
                                dose: '',
                              });
                              handleIncrement();
                            }}
                            className={styles.counterIcon}
                          />
                        </Box>
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
            </div>
            <div className={styles.preparationWrapper}>
              <div className={styles.preparationHeaderWrapper}>
                <p className={styles.ingredientsTitle}>Recipe Preparation</p>
              </div>
              <div className={styles.preparationInputWrapper}>
                <Field
                  as="textarea"
                  name="preparation"
                  className={styles.preparationInput}
                  placeholder="Enter recipe"
                />
                <ErrorMessage
                  name="preparation"
                  component="div"
                  className={styles.prepatationError}
                />
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Button type="submit">Add</Button>
            </div>

            {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
            <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
