#!/usr/bin/env node

const madge = require("madge");
const path = require("path");

async function checkCircularDependencies() {
  try {
    const rootPath = process.cwd();

    // madge 설정
    const madgeInstance = await madge(rootPath, {
      baseDir: rootPath,
      fileExtensions: ["js", "jsx", "ts", "tsx"],
      excludeRegExp: [
        /node_modules/,
        /\.(test|spec)\.(js|jsx|ts|tsx)$/,
        /dist/,
      ],
    });

    // 순환 참조 확인
    const circularDependencies = madgeInstance.circular();

    if (circularDependencies.length === 0) {
      console.log("✅ 순환 참조가 없습니다.");
      process.exit(0);
    } else {
      console.log("❌ 순환 참조가 발견되었습니다:");
      circularDependencies.forEach((circle, index) => {
        console.log(`\n순환 참조 #${index + 1}:`);
        console.log(circle.join(" -> ") + ` -> ${circle[0]}`);
      });
      process.exit(1);
    }
  } catch (error) {
    console.error("순환 참조 검사 중 오류가 발생했습니다:", error);
    process.exit(1);
  }
}

checkCircularDependencies();
