export default class Data {
  api(path, method = "GET", body = null, token = null) {
    const url = "/api/v1" + path;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    if (body != null) {
      options.body = JSON.stringify(body);
    }

    // pentru perimisuni in functie de utilizator
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    return fetch(url, options);
  }

  async getCourses(token) {
    let response = await this.api("/courses", "GET", null, token);

    return response.json();
  }

  async addCourse(course) {
    let response = await this.api("/courses", "POST", course);

    return response;
  }

  async addStudent(student) {
    let response = await this.api("/users", "POST", student);

    return student;
  }

  async addBlog(blog) {
    let response = await this.api("/blogs", "POST", blog);

    return blog;
  }

  async deleteCourse(course) {
    let response = await this.api(`/courses/${course.id}`, "DELETE", course);

    return response;
  }

  async updateCourse(course) {
    let response = await this.api(`/courses/${course.id}`, "PUT", course);

    return response;
  }

  async logIn(student) {
    let response = await this.api("/users/log", "POST", student);

    let data = await response.json();

    return data;
  }

  async addEnrolment(enrolment) {
    let response = await this.api("/enrolment", "POST", enrolment);

    return response;
  }

  async getEnrolment() {
    let response = await this.api("/enrolment", "GET");

    return response.json();
  }

  async deleteEnrolment(enrolment) {
    let response = await this.api(
      `/enrolment/${enrolment.id}`,
      "DELETE",
      enrolment
    );

    return response;
  }

  async getUsers() {
    let response = await this.api(`/users`, "GET");

    return response.json();
  }

  async getBlogs() {
    let response = await this.api(`/blogs`, "GET");

    return response.json();
  }

  async removeUser(user) {
    let response = await this.api(`/users/${user.id}`, "DELETE", user);
  }

  async deleteBlog(blog) {
    let response = await this.api(`/blogs/${blog.id}`, "DELETE", blog);
  }

  async updateBlog(blog) {
    let response = await this.api(`/blogs/${blog.id}`, "PUT", blog);
  }

  async updateUser(user) {
    let response = await this.api(`/users/${user.id}`, "PUT", user);

    return response;
  }
}

// {password:'22222', email: "stacy.smith@exemplu.comm"}
