---
date: 2022-02-19
title: Centos 安装 Docker 及 DockerCompose
category: essays
tags:
  - Docker
  - DockerCompose
---

## 安装 Docker
  ### 使用 `root` 账户登录 `centos` 确保 `yum` 包更新到最新
  ``` shell
  sudo yum update
  ```
  ### 安装需要的软件包 `yum-util` 提供 `yum-config-manager` 功能，另外两个是 `devicemapper` 驱动依赖的
  ``` shell
  sudo yum install -y yum-utils device-mapper-persistent-data lvm2
  ```
  ### 设置 `yum` 源
  ``` shell
  sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
  ```
  ### 安装 `Docker`
  ``` shell
  sudo yum install docker-ce
  ```
  ### 启动并加入开机启动
  ``` shell
  sudo systemctl start docker
  sudo systemctl enable docker
  ```
## 安装 docker-compose
``` shell
sudo yum -y install python-pip && sudo pip3 install --upgrade pip && sudo pip3 install docker-compose
```