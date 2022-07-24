# 获取当前执行脚本的目录
DIR=$(cd `dirname $0`; pwd)
cd "$DIR"

# npm run build
# if [ $? -ne 0 ]; then
#         echo "编译失败!!!"
#         exit 1
# fi

npm run commit

if [ $? -ne 0 ]; then
  echo -e "\033[31m运行commit命令失败\033[0m"
  exit 1
fi


if branch=$(git symbolic-ref --short -q HEAD)
then
	echo -e "\033[32m准备提交：$branch ...\033[0m"
else
	echo -e "\033[31m无效分支：请检查！！！\033[0m"
	exit 1
fi

# git push origin $branch
# echo -e "\033[32m提交完毕：$branch\033[0m"



