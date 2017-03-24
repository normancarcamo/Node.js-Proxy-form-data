$(document).ready(() => {
  $('#uploadbutton').on('click', (evt) => {

    const formData = new FormData()
    const file = $('#image-file')[0].files[0]

    formData.append('images', file)
    formData.append('username', 'gbelot')
    formData.append('password', 'Luna0102')
    formData.append('link_id', 1)

    $.ajax({
      type: "POST",
      url: "/api/uploads",
      data: formData,
      contentType: false,
      processData: false,
      success: function (e) {
        console.log("Data Uploaded: ", e)
      },
      error: function(e) {
        console.log('ERROR MAN', e);
      }
    })
  })
})
