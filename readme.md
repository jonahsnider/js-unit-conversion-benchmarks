# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 21 Mar 2024 01:53:54 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1380-989 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `121`ns (110%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (264%)        | `321`ns (292%)                 | `3,448,276`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (383%)        | `491`ns (446%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (528%)        | `661`ns (601%)                 | `1,721,170`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,102`ns (1,002%)    | `1,202`ns (1,093%)             | `907,441`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,182`ns (1,075%)    | `1,363`ns (1,239%)             | `846,024`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,302`ns (1,184%)    | `1,453`ns (1,321%)             | `768,049`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,575`ns (2,341%)    | `2,805`ns (2,550%)             | `388,350`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,391`ns (3,992%)    | `4,799`ns (4,363%)             | `227,739`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,615`ns (65,105%)  | `73,023`ns (66,385%)           | `13,964`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `801`ns (100%)        | `1,222`ns (153%)               | `1,248,439`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,127`ns (4,510%)   | `52,415`ns (6,544%)            | `27,680`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,031`ns (10,491%)  | `155,263`ns (19,384%)          | `11,900`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (229%)        | `361`ns (258%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (301%)        | `471`ns (336%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (372%)        | `561`ns (401%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (866%)      | `1,313`ns (938%)               | `825,083`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,459`ns (3,185%)    | `4,699`ns (3,356%)             | `224,266`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,575`ns (26,125%)  | `37,215`ns (26,582%)           | `27,341`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `141`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (247%)        | `381`ns (293%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (362%)        | `611`ns (470%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,312`ns (1,009%)    | `1,523`ns (1,172%)             | `762,195`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,643`ns (1,264%)    | `2,265`ns (1,742%)             | `608,643`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,443`ns (4,956%)    | `8,007`ns (6,159%)             | `155,207`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,295`ns (60,996%)  | `81,023`ns (62,325%)           | `12,611`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `541`ns (115%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (111%)        | `581`ns (123%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (128%)        | `681`ns (145%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `210`ns (100%)        | `230`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (243%)        | `561`ns (267%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
