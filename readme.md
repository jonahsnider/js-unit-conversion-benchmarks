# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 13 Nov 2021 04:13:19 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az216-374 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `600`ns (300%)                 | `1,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,100`ns (550%)      | `1,200`ns (600%)               | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,300`ns (650%)               | `833,333`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,701`ns (851%)      | `2,000`ns (1,000%)             | `587,889`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (2,001%)    | `4,303`ns (2,152%)             | `249,938`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,003`ns (3,502%)    | `7,503`ns (3,752%)             | `142,796`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,201`ns (100%)      | `1,301`ns (108%)               | `832,639`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `39,231`ns (3,267%)   | `41,023`ns (3,416%)            | `25,490`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `52,127`ns (4,340%)   | `55,903`ns (4,655%)            | `19,184`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `500`ns (495%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,001`ns (991%)      | `1,200`ns (1,188%)             | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,001`ns (991%)      | `1,101`ns (1,090%)             | `999,001`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,401`ns (3,367%)    | `3,601`ns (3,565%)             | `294,031`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,100`ns (1,089%)    | `1,401`ns (1,387%)             | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,400`ns (1,386%)    | `1,500`ns (1,485%)             | `714,286`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,001`ns (3,961%)    | `4,299`ns (4,256%)             | `249,938`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,803`ns (4,755%)    | `5,003`ns (4,953%)             | `208,203`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `300`ns (100%)        | `400`ns (133%)                 | `3,333,333`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `300`ns (100%)        | `400`ns (133%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (134%)        | `401`ns (134%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
