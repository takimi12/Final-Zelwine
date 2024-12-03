
export type ProcessStep = {
    process_image: {
      url: string;
    };
    step: string;
    step_title: string;
    step_text: string;
  };
  
  export type RenovationProcesProps = {
    proces: {
      title: string;
      process_steps: ProcessStep[];
    };
  };
  