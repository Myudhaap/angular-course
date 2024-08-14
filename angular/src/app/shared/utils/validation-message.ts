export const VALIDATION_MESSAGES = {
  required: 'Kolom %s tidak boleh kosong',
  minlength: "Kolom %s harus memiliki minimal %s karakter"
}

export function formatValidationMessage(message: string, ...params: any[]) {
  // console.log("formvalidation",{params})
  return message.replace(/%s/g, () => params.shift())
}
