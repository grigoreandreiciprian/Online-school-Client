export default class PhotoData {
  api(path, method = "PUT", body = null, token = null) {
    const url = "/api/v1" + path;

    const options = {
      method,

      headers: {
        "Content-Type": "image/jpeg",
      },
    };

    console.log(body);
    if (body != null) {
      options.body = body;
    }

    return fetch(url, options);
  }

  async uploadPhoto(id, photo) {
    let response = await this.api(`/users/${id}/upload`, "PUT", photo);

    return response;
  }

  async uploadBlogPhoto(id, blog) {
    let response = await this.api(`/blogs/${id}/uploadBlog`, "PUT", blog);

    return response;
  }

  async uploadCoursePhoto(id, photo) {
    let response = await this.api(`/courses/${id}/uploadCourse`, "PUT", photo);

    return response;
  }
}
