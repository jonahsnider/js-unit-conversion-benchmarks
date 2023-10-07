# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 07 Oct 2023 03:07:03 GMT with Node.js v18.18.0 (V8 v10.2.154.26-node.26) on fv-az1102-343 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `700`ns (350%)                 | `1,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (351%)        | `800`ns (400%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `900`ns (450%)        | `1,001`ns (501%)               | `1,111,111`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,400`ns (700%)      | `1,501`ns (751%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (801%)      | `1,701`ns (851%)               | `624,610`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,701`ns (1,351%)    | `3,001`ns (1,501%)             | `370,233`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,603`ns (2,302%)    | `4,803`ns (2,402%)             | `217,250`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,103`ns (4,052%)    | `8,503`ns (4,252%)             | `123,411`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,601`ns (100%)      | `1,800`ns (112%)               | `624,610`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `57,919`ns (3,618%)   | `66,303`ns (4,141%)            | `17,265`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `65,311`ns (4,079%)   | `68,543`ns (4,281%)            | `15,311`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `600`ns (300%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (251%)        | `600`ns (300%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (600%)      | `1,401`ns (701%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (651%)      | `1,601`ns (801%)               | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,901`ns (1,951%)    | `4,103`ns (2,052%)             | `256,345`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `601`ns (301%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,400`ns (700%)      | `1,701`ns (851%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,501`ns (751%)      | `1,800`ns (900%)               | `666,223`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,903`ns (2,452%)    | `5,203`ns (2,602%)             | `203,957`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,503`ns (2,752%)    | `5,703`ns (2,852%)             | `181,719`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `500`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (151%)        | `401`ns (201%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
