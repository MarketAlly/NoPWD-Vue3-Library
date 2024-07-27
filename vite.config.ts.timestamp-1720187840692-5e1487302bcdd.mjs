// vite.config.ts
import { defineConfig } from "file:///C:/Solutions/nopwd_library/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Solutions/nopwd_library/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import typescript2 from "file:///C:/Solutions/nopwd_library/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import dts from "file:///C:/Solutions/nopwd_library/node_modules/vite-plugin-dts/dist/index.mjs";
import copy from "file:///C:/Solutions/nopwd_library/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
var __vite_injected_original_dirname = "C:\\Solutions\\nopwd_library";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ["vite.config.ts"]
    }),
    copy({
      // Add this plugin configuration
      targets: [
        { src: "src/assets/*.png", dest: "dist/assets" }
      ]
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/main.ts",
      name: "nnopwdVue3Library",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `nopwdVue3Library.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: {
        main: path.resolve(__vite_injected_original_dirname, "src/components/main.ts")
      },
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css")
            return "nopwdVue3Library.css";
          return assetInfo.name || "default-name";
        },
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxTb2x1dGlvbnNcXFxcbm9wd2RfbGlicmFyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcU29sdXRpb25zXFxcXG5vcHdkX2xpYnJhcnlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1NvbHV0aW9ucy9ub3B3ZF9saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHR5cGVzY3JpcHQyIGZyb20gJ3JvbGx1cC1wbHVnaW4tdHlwZXNjcmlwdDInXHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiXHJcbmltcG9ydCBjb3B5IGZyb20gJ3JvbGx1cC1wbHVnaW4tY29weSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBkdHMoe1xyXG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxyXG4gICAgfSksXHJcbiAgICB0eXBlc2NyaXB0Mih7XHJcbiAgICAgIGNoZWNrOiBmYWxzZSxcclxuICAgICAgaW5jbHVkZTogW1wic3JjL2NvbXBvbmVudHMvKiovKi52dWVcIl0sXHJcbiAgICAgIHRzY29uZmlnT3ZlcnJpZGU6IHtcclxuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcclxuICAgICAgICAgIG91dERpcjogXCJkaXN0XCIsXHJcbiAgICAgICAgICBzb3VyY2VNYXA6IHRydWUsXHJcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIGRlY2xhcmF0aW9uTWFwOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4Y2x1ZGU6IFtcInZpdGUuY29uZmlnLnRzXCJdXHJcbiAgICB9KSxcclxuICAgIGNvcHkoeyAvLyBBZGQgdGhpcyBwbHVnaW4gY29uZmlndXJhdGlvblxyXG4gICAgICB0YXJnZXRzOiBbXHJcbiAgICAgICAgeyBzcmM6ICdzcmMvYXNzZXRzLyoucG5nJywgZGVzdDogJ2Rpc3QvYXNzZXRzJyB9LFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xyXG4gICAgICBlbnRyeTogXCJzcmMvY29tcG9uZW50cy9tYWluLnRzXCIsXHJcbiAgICAgIG5hbWU6ICdubm9wd2RWdWUzTGlicmFyeScsXHJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCIsIFwidW1kXCJdLFxyXG4gICAgICBmaWxlTmFtZTogZm9ybWF0ID0+IGBub3B3ZFZ1ZTNMaWJyYXJ5LiR7Zm9ybWF0fS5qc2BcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcclxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtYWluOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzL21haW4udHNcIilcclxuICAgICAgfSxcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdtYWluLmNzcycpIHJldHVybiAnbm9wd2RWdWUzTGlicmFyeS5jc3MnO1xyXG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIHx8ICdkZWZhdWx0LW5hbWUnOyAvLyBFbnN1cmUgYSBzdHJpbmcgaXMgYWx3YXlzIHJldHVybmVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNRLFNBQVMsb0JBQW9CO0FBQ25TLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUxqQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMseUJBQXlCO0FBQUEsTUFDbkMsa0JBQWtCO0FBQUEsUUFDaEIsaUJBQWlCO0FBQUEsVUFDZixRQUFRO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxLQUFLO0FBQUE7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLEVBQUUsS0FBSyxvQkFBb0IsTUFBTSxjQUFjO0FBQUEsTUFDakQ7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLE9BQU8sS0FBSztBQUFBLE1BQzVCLFVBQVUsWUFBVSxvQkFBb0IsTUFBTTtBQUFBLElBQ2hEO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBLE1BR2IsT0FBTztBQUFBLFFBQ0wsTUFBVyxhQUFRLGtDQUFXLHdCQUF3QjtBQUFBLE1BQ3hEO0FBQUEsTUFDQSxVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFNBQVM7QUFBWSxtQkFBTztBQUMxQyxpQkFBTyxVQUFVLFFBQVE7QUFBQSxRQUMzQjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
