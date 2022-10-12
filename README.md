## 零件安装
react版本18.2.0
node版本 18.2.0
npm 版本 8.9.0

## 安装依赖
> npm install

## 启动
> npm run start


## Mock

## 详尽配置
package.json

## git 撤销
1，正在开发新功能，突然线上来了个紧急bug。自己刚改的东西很多还没完善。这个时候想切个临时的新分支安排紧急的处理
可以先将文件git stash 存在本地临时文件中
然后切换新分支
如果想回到自己修改的分支后想看到之前的修改文件
git stash show 展示出来
git stash pop 从栈中出来
2，当git add . 之后，突然才发现分支不对。想回add之前的状态
将文件撤销回到最近一次修改的状态：git checkout -- file
这个file 可以通过git status查看modified
3,git commit 操作完之后，才发现写错了一些描述，重新来写
git commit --amend -m "重新书写上一次add new"
4，在多人开发中，遇到了不同的开发工具或者开发的版本不同，但是又需要合并到一起的时候
如果想要提交，就不要add . /add all 了
可以add 具体的文件，可以通过git status查看modified：后面要提交的文件，不提交的就保留在本地
