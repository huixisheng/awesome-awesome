# submodule说明
## 添加

`git submodule add https://github.com/uhub/awesome-css fe/uhub-awesome-css`

## 删除

```
git rm --cached awesome/erichs-awesome-awesome.git
rm -rf awesome/erichs-awesome-awesome.git
删除.gitmodules相应信息.
删除.git/config相关内容.
删除.git/modules/erichs-awesome-awesome.git
```

## 下载

`git clone git@github.com:huixisheng/awesome-awesome.git --recursive`

或者

```
git cloen git@github.com:huixisheng/awesome-awesome.git
git submodule init
```

## 更新

`git submodule foreach --recursive git submodule update`

`git submodule update --remote`
