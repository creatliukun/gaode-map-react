## 零件安装

react 版本 18.2.0
node 版本 18.2.0
npm 版本 8.9.0

## 安装依赖

> npm install

## 启动

> npm run start

## Mock

## 详尽配置

package.json

## git 撤销

### 1，正在开发新功能，突然线上来了个紧急 bug。自己刚改的东西很多还没完善。这个时候想切个临时的新分支安排紧急的处理

可以先将文件 git stash 存在本地临时文件中
然后切换新分支
如果想回到自己修改的分支后想看到之前的修改文件
git stash show 展示出来
git stash pop 从栈中出来
```bash
git stash # 暂存到临时栈
git checkout -b  tempBranch # 创建并切换到临时分支
git checkout myBranch # 临时分支开发完成切换到之前分支
git stash show # 展示现在分支的临时栈
git stash pop # 将修改记录从临时栈中拉出来

```

### 2，当 git add . 之后，突然才发现分支不对。想回 add 之前的状态

将文件撤销回到最近一次修改的状态：git checkout -- file
这个 file 可以通过 git status 查看 modified
```bash
git checkout -- src/App.css
```

### 3,git commit 操作完之后，才发现写错了一些描述，重新来写

```bash
git commit --amend -m "重新书写上一次add new"
```

### 4，在多人开发中，遇到了不同的开发工具或者开发的版本不同，但是又需要合并到一起的时候

+ 如果想要提交，就不要 add . /add all 了
+ 可以 add 具体的文件，可以通过 git status 查看 modified：后面要提交的文件，不提交的就保留在本地
```bash
git add src/App.css
```
### 5,如果是临时去帮忙，工作中当过一段时间后，发现推送代码推不上去了，可以看看是不是没有权限了
```
git remote -v
```
+ fetch代表可以拉取仓库，push代表可以推送。
+ 如果没有权限只能拉取的情况下不会显示push


