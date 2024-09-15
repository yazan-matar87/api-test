import Swal from 'sweetalert2';
import {deleteSubject} from "../api/teacher"


export const onDeleteAlarm =(id:number) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSubject(id)
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }
  export const isAddedSuccesfuly = () => {
      Swal.fire({
          title: "You added successfully",
          icon: "success"
      });
  };
  
  export const isAddedError = (error: any) => {
      Swal.fire({
          title: "There is an error in add",
          text: error.message, // Display the error message
          icon: "error"
      });
  };
  
  export const isupdateSuccesfuly = () => {
      Swal.fire({
          title: "You uploaded successfully",
          icon: "success"
      });
  };
  
  export const isupdateError = (error: any) => {
      Swal.fire({
          title: "There is an error in upload",
          text: error.message, // Display the error message
          icon: "error"
      });
  };
  
  
  