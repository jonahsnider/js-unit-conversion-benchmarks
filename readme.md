# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 17 Mar 2022 15:40:21 GMT with Node.js v16.14.0 (V8 v9.4.146.24-node.20) on fv-az397-458 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `301`ns (151%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `600`ns (300%)        | `601`ns (301%)                 | `1,666,667`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `800`ns (400%)        | `801`ns (401%)                 | `1,250,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `800`ns (400%)        | `801`ns (401%)                 | `1,250,000`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,100`ns (550%)      | `1,200`ns (600%)               | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,801`ns (1,401%)    | `3,001`ns (1,501%)             | `357,015`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,103`ns (3,052%)    | `6,703`ns (3,352%)             | `163,854`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `800`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,511`ns (4,638%)   | `33,023`ns (4,711%)            | `30,759`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `63,103`ns (9,002%)   | `64,127`ns (9,148%)            | `15,847`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `301`ns (298%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `301`ns (298%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `701`ns (694%)        | `800`ns (792%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,901`ns (2,872%)    | `3,201`ns (3,169%)             | `344,709`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (100%)        | `301`ns (151%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `202`ns (101%)        | `301`ns (151%)                 | `4,950,495`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `800`ns (400%)        | `900`ns (450%)                 | `1,250,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,200`ns (600%)               | `909,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,103`ns (2,052%)    | `4,203`ns (2,102%)             | `243,724`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (2,152%)    | `4,503`ns (2,252%)             | `232,396`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `401`ns (133%)                 | `3,322,259`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (133%)        | `401`ns (133%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (133%)        | `401`ns (133%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
