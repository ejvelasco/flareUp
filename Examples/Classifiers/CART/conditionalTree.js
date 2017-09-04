function conditionalTree(example) {
  if (example['8'] <= 1) { 
   if (example['9'] <= 1) { 
     if (example['1'] <= 101) { 
       if (example['1'] <= 87) { 
         if (example['6'] <= 3) { 
           if (example['1'] <= 69) { 
             if (example['10'] <= 2) { 
               if (example['5'] <= 9) { 
                 if (example['2'] <= 11.75) { 
                   return '1';
                  } else {
                   if (example['14'] <= 5) { 
                     return 'undefined';
                    }
                    return '1';
                  }
                }
                return '2';
              }
              return '1';
            } else {
             if (example['4'] <= 1) { 
               if (example['7'] <= 0.375) { 
                 if (example['14'] <= 0) { 
                   return '2';
                  }
                  return '1';
                }
                return '1';
              }
              return '2';
            }
          } else {
           if (example['11'] <= 1) { 
             return '2';
            }
            return '1';
          }
        } else {
         if (example['4'] <= 1) { 
           return '2';
          }
          return '1';
        }
      } else {
       if (example['2'] <= 1.04) { 
         if (example['5'] <= 1) { 
           return '2';
          } else {
           if (example['1'] <= 296) { 
             if (example['14'] <= 0) { 
               if (example['5'] <= 2) { 
                 return '1';
                }
                return '2';
              }
              return '1';
            }
            return '2';
          }
        }
        return '1';
      }
    } else {
     if (example['14'] <= 400) { 
       if (example['1'] <= 98) { 
         if (example['1'] <= 56) { 
           if (example['5'] <= 10) { 
             if (example['7'] <= 0.5) { 
               if (example['5'] <= 3) { 
                 if (example['14'] <= 0) { 
                   return '2';
                  }
                  return '1';
                }
                return '1';
              }
              return '1';
            } else {
             if (example['13'] <= 33) { 
               return '2';
              }
              return '1';
            }
          } else {
           if (example['7'] <= 5) { 
             return '2';
            } else {
             if (example['7'] <= 6.5) { 
               return '1';
              }
              return '2';
            }
          }
        } else {
         if (example['7'] <= 1.165) { 
           if (example['1'] <= 141) { 
             return '1';
            } else {
             if (example['13'] <= 13) { 
               if (example['14'] <= 0) { 
                 if (example['5'] <= 12) { 
                   return '1';
                  } else {
                   if (example['1'] <= 311) { 
                     return '2';
                    }
                    return 'undefined';
                  }
                }
                return '2';
              }
              return '2';
            }
          } else {
           if (example['2'] <= 1.5) { 
             if (example['1'] <= 142) { 
               return '1';
              }
              return '2';
            }
            return '1';
          }
        }
      } else {
       if (example['13'] <= 96) { 
         return '1';
        }
        return '2';
      }
    }
  } else {
   if (example['4'] <= 2) { 
     if (example['2'] <= 0.165) { 
       if (example['6'] <= 4) { 
         if (example['1'] <= 309) { 
           if (example['13'] <= 137) { 
             return '2';
            }
            return '1';
          }
          return '1';
        }
        return '1';
      } else {
       if (example['1'] <= 91) { 
         if (example['7'] <= 2.25) { 
           if (example['1'] <= 89) { 
             if (example['14'] <= 2010) { 
               if (example['13'] <= 4) { 
                 if (example['2'] <= 0.665) { 
                   return '1';
                  }
                  return '2';
                }
                return '2';
              } else {
               if (example['1'] <= 14) { 
                 return '1';
                }
                return '2';
              }
            } else {
             if (example['7'] <= 0.04) { 
               return '2';
              }
              return '1';
            }
          } else {
           if (example['14'] <= 0) { 
             if (example['5'] <= 1) { 
               return '2';
              }
              return '1';
            }
            return '2';
          }
        } else {
         if (example['2'] <= 0.375) { 
           if (example['2'] <= 0.335) { 
             return '2';
            }
            return '1';
          } else {
           if (example['5'] <= 1) { 
             if (example['1'] <= 149) { 
               if (example['1'] <= 135) { 
                 return '2';
                }
                return '1';
              }
              return '2';
            }
            return '2';
          }
        }
      }
    } else {
     if (example['0'] <= 1) { 
       if (example['1'] <= 55) { 
         return '1';
        } else {
         if (example['1'] <= 62) { 
           return '2';
          } else {
           if (example['1'] <= 202) { 
             return '1';
            }
            return '2';
          }
        }
      }
      return '1';
    }
  }
}

module.exports = conditionalTree;