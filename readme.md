# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 16 Apr 2022 01:37:25 GMT with Node.js v16.14.2 (V8 v9.4.146.24-node.20) on fv-az201-85 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `300`ns (149%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (149%)        | `300`ns (149%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `501`ns (249%)                 | `1,996,008`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (349%)        | `800`ns (398%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,101`ns (548%)      | `1,101`ns (548%)               | `908,265`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,401`ns (697%)      | `1,500`ns (746%)               | `713,776`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,701`ns (1,841%)    | `3,801`ns (1,891%)             | `270,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,003`ns (3,982%)    | `8,103`ns (4,031%)             | `124,953`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `900`ns (100%)        | `1,001`ns (111%)               | `1,111,111`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `38,111`ns (4,235%)   | `38,815`ns (4,313%)            | `26,239`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `74,239`ns (8,249%)   | `75,327`ns (8,370%)            | `13,470`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `300`ns (149%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `501`ns (249%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (597%)      | `1,201`ns (598%)               | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (1,991%)    | `4,103`ns (2,041%)             | `249,938`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `400`ns (199%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (498%)      | `1,101`ns (548%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,400`ns (697%)               | `768,640`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,003`ns (2,489%)    | `5,103`ns (2,539%)             | `199,880`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,103`ns (2,539%)    | `5,203`ns (2,589%)             | `195,963`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `501`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (125%)        | `600`ns (150%)                 | `1,996,008`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (125%)        | `501`ns (125%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `300`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `401`ns (134%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
