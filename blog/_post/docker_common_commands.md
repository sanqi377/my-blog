---
date: 2022-02-19
title: Docker 常用命令
category: essays
tags:
  - Docker
---

## 列出本地镜像
``` shell
docker images
```
  ### Options
  - a：列出所有镜像

## 删除镜像
``` shell
docker rmi <镜像ID>
```

## 列出容器
``` shell
docker ps
```
  ### Options
  - a：列出所有容器，包括未运行

## 启动 && 停止 && 重启 && 删除容器
``` shell
docker start <镜像ID>    // 启动容器
docker stop <镜像ID>     // 停止容器
docker restart <镜像ID>  // 重启容器
docker rm <容器ID>       // 删除容器
```

## 进入 && 退出容器 Bash
``` shell
docker exec -i -t <容器ID> /bin/bash    // 进入容器 Bash
exit                                   // 退出容器 Bash
```
