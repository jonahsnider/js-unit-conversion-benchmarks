# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 17 Nov 2023 00:46:22 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az665-913 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `91`ns (100%)         | `181`ns (199%)                 | `10,989,011`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `221`ns (243%)        | `361`ns (397%)                 | `4,524,887`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `222`ns (244%)        | `451`ns (496%)                 | `4,504,505`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `321`ns (353%)        | `611`ns (671%)                 | `3,115,265`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `462`ns (508%)        | `1,012`ns (1,112%)             | `2,164,502`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `651`ns (715%)        | `1,353`ns (1,487%)             | `1,536,098`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `672`ns (738%)        | `1,343`ns (1,476%)             | `1,488,095`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,202`ns (1,321%)    | `2,647`ns (2,909%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,495`ns (2,742%)    | `4,583`ns (5,036%)             | `400,802`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,491`ns (4,935%)    | `9,023`ns (9,915%)             | `222,668`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `753`ns (100%)        | `842`ns (112%)                 | `1,328,021`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,151`ns (4,137%)   | `36,191`ns (4,806%)            | `32,102`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,559`ns (5,121%)   | `39,871`ns (5,295%)            | `25,934`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (189%)        | `401`ns (210%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (257%)        | `531`ns (278%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `552`ns (289%)        | `611`ns (320%)                 | `1,811,594`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,233`ns (646%)      | `1,324`ns (693%)               | `811,030`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,303`ns (682%)      | `1,423`ns (745%)               | `767,460`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,639`ns (2,429%)    | `4,959`ns (2,596%)             | `215,564`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `221`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (199%)        | `431`ns (226%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `462`ns (242%)        | `531`ns (278%)                 | `2,164,502`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,234`ns (646%)      | `1,364`ns (714%)               | `810,373`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,763`ns (923%)      | `2,053`ns (1,075%)             | `567,215`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,783`ns (3,028%)    | `6,111`ns (3,199%)             | `172,921`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,243`ns (3,269%)    | `6,975`ns (3,652%)             | `160,179`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `642`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (107%)        | `672`ns (118%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `701`ns (123%)        | `781`ns (137%)                 | `1,426,534`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `281`ns (100%)        | `302`ns (107%)                 | `3,558,719`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `491`ns (175%)        | `542`ns (193%)                 | `2,036,660`/sec       |

<!-- endblock(results) -->
