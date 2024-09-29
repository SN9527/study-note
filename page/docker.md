---
date: 2024-09-29
title: Docker
subtitle: docker基本操作
---

# 镜像操作


- save导出导入镜像

```bash
docker save -o nginx.tar nginx
```

```bash
docker load -i nginx.tar
```

- export导出导入镜像

```bash
docker export containerId > image.tar
```

```bash
docker import image.tar image:tag
```

- 删除镜像

```bash
docker rmi nginx
```