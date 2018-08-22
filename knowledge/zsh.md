CentOS安装zsh和oh-my-zsh
-------



## 安装步骤 ##

安装zsh

    yum install zsh
    zsh --version

安装oh-my-zsh

    wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

切换默认的shell到zsh

    chsh -s /bin/zsh


## 其他 ##

查看系统有几种shell

    cat /etc/shells

安装 auto-jump

    wget https://github.com/downloads/joelthelion/autojump/autojump_v21.1.2.tar.gz

    tar zxvf autojump_v21.1.2.tar.gz && cd autojump_v21.1.2 && ./install.sh && vi ~/.zshrc

    # 拷贝以下内容到 ~/.zshrc

    [[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh

    # 让zsh修改生效
    source ~/.zshrc



## 参考 ##
- [终极 Shell——ZSH](http://zhuanlan.zhihu.com/mactalk/19556676)
- [zsh自动智能提示](https://github.com/tarruda/zsh-autosuggestions)
- http://wdxtub.com/2016/02/18/oh-my-zsh/
- [zsh 全程指南](https://aaaaaashu.gitbooks.io/mac-dev-setup/content/iTerm/zsh.html)
