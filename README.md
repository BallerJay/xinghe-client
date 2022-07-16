# ⚠️ 注意事项

1. 使用 Mac 的小伙伴请注意
   如果在使用时`npm run commit` 时出现以下这种错误提示

```
提示：因为没有将钩子 '.husky/pre-commit' 设置为可执行，钩子被忽略。您可以通过
提示：配置 `git config advice.ignoredHook false` 来关闭这条警告。
提示：因为没有将钩子 '.husky/commit-msg' 设置为可执行，钩子被忽略。您可以通过
提示：配置 `git config advice.ignoredHook false` 来关闭这条警告。
```

以上问题是因为 husky 文件中的脚本没有授权可执行的权限，通过`chmod 777 *`可以命令将 husky 中的文件赋予读、写、执行的权限。
