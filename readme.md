# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 26 Dec 2022 22:53:51 GMT with Node.js v18.12.1 (V8 v10.2.154.15-node.12) on fv-az452-770 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `301`ns (298%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `301`ns (298%)        | `401`ns (397%)                 | `3,322,259`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `600`ns (594%)        | `601`ns (595%)                 | `1,666,667`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `701`ns (694%)        | `800`ns (792%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `701`ns (694%)        | `800`ns (792%)                 | `1,426,534`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,200`ns (1,188%)    | `1,202`ns (1,190%)             | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,701`ns (2,674%)    | `2,801`ns (2,773%)             | `370,233`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,903`ns (5,845%)    | `6,103`ns (6,043%)             | `169,405`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `601`ns (100%)        | `700`ns (116%)                 | `1,663,894`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,007`ns (4,826%)   | `32,207`ns (5,359%)            | `34,474`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `53,119`ns (8,838%)   | `55,007`ns (9,153%)            | `18,826`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (298%)        | `301`ns (298%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `301`ns (298%)        | `401`ns (397%)                 | `3,322,259`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `701`ns (694%)        | `801`ns (793%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,801`ns (2,773%)    | `2,901`ns (2,872%)             | `357,015`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (100%)        | `301`ns (151%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `800`ns (400%)        | `801`ns (401%)                 | `1,250,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,100`ns (550%)               | `909,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `3,901`ns (1,951%)    | `4,001`ns (2,001%)             | `256,345`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (2,001%)    | `4,103`ns (2,052%)             | `249,938`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `400`ns (133%)                 | `3,322,259`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `301`ns (100%)        | `401`ns (133%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (133%)        | `401`ns (133%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
