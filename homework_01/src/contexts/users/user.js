'use strict';

export default class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.password = user.password;
    this.gender = user.gender;
    this.role = user.role;
    this.avatarUrl = user.avatarUrl;
    this.description = user.description;
    this.status = user.status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update() {
    this.updatedAt = new Date();
  }
};